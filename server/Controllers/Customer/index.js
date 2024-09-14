const Customer = require('../../models/Customer/');
const { Sequelize, Op } = require("sequelize");
const inputFieldsCustomer = [
  "first_name",
  "last_name",
  "city",
  "company",
];

// 1) Controller function to add a new customer
module.exports.addCustomer = async (req, res) => {
  try {
    const { first_name, last_name, city, company } = req.body;

    if (!first_name || !last_name || !city || !company) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const newCustomer = await Customer.create(req.body, {
      fields: inputFieldsCustomer,
    });

    res.status(201).json({ message: 'Customer Added successfully.', customer: newCustomer });

  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ message: 'An error occurred while creating the customer.' });
  }
};

// 2) List API with search by first_name, last_name, and city with pagination
module.exports.listCustomers = async (req, res) => {
  try {
    const { searchTerm, page = 1, limit = 10 } = req.query;

    // Build the where clause for filtering
    const whereClause = {};
    if (searchTerm) {
      whereClause[Op.or] = [
        { first_name: { [Op.like]: `%${searchTerm}%` } },
        { last_name: { [Op.like]: `%${searchTerm}%` } },
        { city: { [Op.like]: `%${searchTerm}%` } },
      ];
    }

    // Fetch customers with pagination and filtering
    const customers = await Customer.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    });

    res.status(200).json({
      message: 'Customers retrieved successfully.',
      total: customers.count,
      page: parseInt(page),
      limit: parseInt(limit),
      data: customers.rows,
    });
  } catch (error) {
    console.error('Error retrieving customers:', error);
    res.status(500).json({ message: 'An error occurred while retrieving customers.' });
  }
};

// 3) Get single customer data by its ID
module.exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found.' });
    }

    res.status(200).json({ message: 'Customer retrieved successfully.', customer });
  } catch (error) {
    console.error('Error retrieving customer:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the customer.' });
  }
};

// 4) List all unique cities with the number of customers from each city
module.exports.listUniqueCitiesWithCustomerCount = async (req, res) => {
  try {
    const cities = await Customer.findAll({
      attributes: ['city', [Sequelize.fn('COUNT', Sequelize.col('city')), 'customerCount']],
      group: ['city'],
    });

    res.status(200).json({
      message: 'Unique cities with customer counts retrieved successfully.',
      data: cities,
    });
  } catch (error) {
    console.error('Error retrieving unique cities:', error);
    res.status(500).json({ message: 'An error occurred while retrieving unique cities.' });
  }
};

// Controller function to update customer details, including profile image upload
module.exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, city, company } = req.body;

    // Find the customer by ID
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found.' });
    }

    // Update customer details
    customer.first_name = first_name || customer.first_name;
    customer.last_name = last_name || customer.last_name;
    customer.city = city || customer.city;
    customer.company = company || customer.company;

    // If a profile image is uploaded, update it
    if (req.file) {
      customer.profile_img = req.file.path;
    }

    // Save the updated customer
    await customer.save();

    res.status(200).json({ message: 'Customer updated successfully.', customer });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ message: 'An error occurred while updating the customer.' });
  }
};