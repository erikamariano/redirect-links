const express = require('express');
const router = express.Router();

const classLinkController = require('../controllers/classLink-controller');

router.get('/', classLinkController.getAllLinks);

router.get('/add', (req,res) => { res.render('add', {error:false, body:{}}) });

router.get('/:titleFromURL', classLinkController.redirect);

router.get('/edit/:id', classLinkController.loadLink);

router.post('/add', express.urlencoded({extended: true}), classLinkController.addLink);

router.post('/edit/:id', express.urlencoded({extended: true}), classLinkController.editLink);

router.delete('/:id', classLinkController.deleteLink);

module.exports = router;