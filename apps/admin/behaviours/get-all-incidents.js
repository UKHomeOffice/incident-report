'use strict';
const db = require('../../common/models/db-query');
const _ = require('lodash');
const moment = require('moment');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const superlocals = super.locals(req, res);
    const data = Object.assign({}, {
      previousReports: _.sortBy(req.previousReports, 'id').reverse()
    });
    const locals = Object.assign({}, superlocals, data);

    return locals;
  }
  
  async getValues(req, res, next) {
    this.cleanSession(req);

    try {
      const records = await db.getAll()

      if (records && records.length && records[0].id) {
        req.previousReports = [];

        records.forEach(report => {
          
          if (report.complete) {
            report.complete = 'Completed'
          } else {
            report.complete = 'In progress'
          }

          let rep = {
            reference: report.id,
            updatedAt: moment(report.updated_at).format('DD MMMM YYYY'),
            progress: report.complete,
            email: report.user_email,
          };
          req.previousReports.push(rep);
        });
        super.getValues(req, res, next);
      } else {
        super.getValues(req, res, next);
      }
    } catch (err){
      console.error(err);
    }

  }

  cleanSession(req) {
    let cleanList = Object.keys(req.sessionModel.attributes);
    const keepList = ['csrf-secret'];

    cleanList = cleanList.filter(item => {
      if (keepList.indexOf(item) === -1) {
        return item;
      }
    });

    req.sessionModel.unset(cleanList);
    req.sessionModel.set('steps', ['/reports']);
  }

  saveValues(req, res, next) {
    super.saveValues(req, res, async (err) => {
      try {
        if (req.body.delete || req.body.resume) {
          const id = req.body.resume || req.body.delete;
          console.log('id==========>',id, 'req.body============>', req.body);

          if (id) {
            const record = await db.get(id);
            if (record) {
              req.sessionModel.set('incident-record', record.pop());
              return res.redirect('/admin/show-report');
            }
              next(err);
        } 
          else {
            this.cleanSession(req);
            next(err);
          }
        }
      } catch (err){
        console.error(err);
      }
    });
  }

};

