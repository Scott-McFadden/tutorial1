const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const CreditCardTrans = mongoose.model('creditCardTrans');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
app.post('/api/stripe', requireLogin, async (req,res)=> {

  console.log(req.body);
  if (req.body  ) {

      const charge = await stripe.charges.create({
          amount: 500,
          currency: 'usd',
          description: 'purchased 5 survey credits',
          source: req.body.id
      });


      const creditCardTrans = await new CreditCardTrans({
          userId: req.user._id,
          tokenId: req.body.id,
          cardId: req.body.card.id,
          brand: req.body.card.brand,
          country: req.body.card.country,
          cvc_check: req.body.card.cvc_check,
          exp_month: req.body.card.exp_month,
          exp_year: req.body.card.exp_year,
          funding: req.body.card.funding,
          last4: req.body.card.last4,
          clientIP: req.body.client_ip,
          created: req.body.created,
          email: req.body.email,
          chargeId: charge.id,
          amount: charge.amount,
          balance_transaction: charge.balance_transaction,
          chargeDate: charge.created,
          currency: charge.currency,
          description: charge.description,
          network_status: charge.outcome.network_status,
          seller_message: charge.outcome.seller_message,
          outcomeType: charge.outcome.outcomeType,
          refundUrl: charge.refunds.url,
          fingerPrint: charge.source.fingerPrint
      }).save();
      console.log('Credit Card Transaction -> ', req.body.id, ' was created');
      console.log("user => ", req.user);
      console.log('charge =>', charge);

      req.user.credits += 5;
      const thisUser = await req.user.save();



       res.send(thisuser);
  }

  res.redirect(keys.callbackClient + '/');
});


};
