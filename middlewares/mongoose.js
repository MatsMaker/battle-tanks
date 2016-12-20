const mongoose = require('mongoose');

exports.connectToDB = () => {
  /**
   * Connect to MongoDB.
   */
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
  mongoose.connection.on('error', () => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  });
}
