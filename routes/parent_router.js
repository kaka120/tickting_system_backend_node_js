
const routes_request = require('../helpers/routing_library_support');
const parent_service = require('../controller/controller');
const VerifyToken = require('../authentication/verifyToken');
const CreateToken = require('../authentication/createToken');

console.log("Parent Router");

routes_request.post('/register',parent_service.LoginRegistrationController)
routes_request.post('/authentication',parent_service.AuthenticationController)
//routes_request.post('/ticketregistration',VerifyToken, register_service.TicketRegistrationRegistrationController, CreateToken)
routes_request.post('/ticketregistration', VerifyToken, parent_service.TicketRegistrationRegistrationController)
routes_request.post('/viewtickets',  VerifyToken, parent_service.ViewTicketsController)
routes_request.post('/viewticketbyid',VerifyToken, parent_service.ViewTicketByIdController)
routes_request.post('/updatebyid',VerifyToken, parent_service.UpdateTicketByIdController)
routes_request.post('/postchatwithusrid',VerifyToken, parent_service.PostChatWithUserIdController)
routes_request.post('/viewchathistory', VerifyToken, parent_service.ViewChatHistoryByIdController)

module.exports = routes_request;
