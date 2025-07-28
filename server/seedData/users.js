const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const AdminModel = require('../models/AdminModel');

const adminUsers = [
    {
        username: 'admin1',
        password: 'admin123',
        name: 'Admin One',
        email: 'admin1@vjhostels.com',
        role: 'admin'
    },
    {
        username: 'admin2',
        password: 'admin456',
        name: 'Admin Two',
        email: 'admin2@vjhostels.com',
        role: 'admin'
    }
];

const studentUsers = [
    {
        rollNumber: '2024001',
        username: 'student1',
        password: 'student123',
        name: 'Student One',
        email: 'student1@vjhostels.com',
        phoneNumber: '9876543201',
        parentMobileNumber: '9876543210',
        role: 'student'
    },
    {
        rollNumber: '2024002',
        username: 'student2',
        password: 'student456',
        name: 'Student Two',
        email: 'student2@vjhostels.com',
        phoneNumber: '9876543202',
        parentMobileNumber: '9876543211',
        role: 'student'
    },
    {
        rollNumber: '2024003',
        username: 'student3',
        password: 'student789',
        name: 'Student Three',
        email: 'student3@vjhostels.com',
        phoneNumber: '9876543203',
        parentMobileNumber: '9876543212',
        role: 'student'
    },
    {
        rollNumber: '2024004',
        username: 'student4',
        password: 'student101',
        name: 'Student Four',
        email: 'student4@vjhostels.com',
        phoneNumber: '9876543204',
        parentMobileNumber: '9876543213',
        role: 'student'
    },
    {
        rollNumber: '2024005',
        username: 'student5',
        password: 'student102',
        name: 'Student Five',
        email: 'student5@vjhostels.com',
        phoneNumber: '9876543205',
        parentMobileNumber: '9876543214',
        role: 'student'
    }
];

module.exports = { adminUsers, studentUsers };