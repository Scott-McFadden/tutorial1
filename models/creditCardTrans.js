const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditCardTransSchema = new Schema ({
    userId: String,
    tokenId: String,
    cardId: String,
    brand: String,
    country: String,
    cvc_check: String,
    exp_month: Number,
    exp_year: Number,
    funding: String,
    last4: String,
    clientIP: String,
    created: Date,
    email: String,
    chargeId: String,
    amount: Number,
    balance_transaction: String,
    chargeDate: Date,
    currency: String,
    description: String,
    network_status: String,
    seller_message: String,
    outcomeType: String,
    refundUrl: String,
    fingerPrint: String

});
mongoose.model('creditCardTrans', creditCardTransSchema);

