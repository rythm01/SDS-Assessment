const express = require('express');
const CustomerCtrl = require('../../Controllers/Customer');
const router = express.Router();
const { upload } = require('../../utils/multer');

router.post('/addCustomers', CustomerCtrl.addCustomer);
router.get('/listCustomers', CustomerCtrl.listCustomers);
router.get('/getSingleCustomer/:id', CustomerCtrl.getCustomerById);
router.get('/uniqueCities', CustomerCtrl.listUniqueCitiesWithCustomerCount);
// Update customer details, including profile image upload
router.put('/:id', upload.single('profile_img'), CustomerCtrl.updateCustomer);

module.exports = router;