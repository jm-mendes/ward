import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "YOUR_AUTH_TOKEN_HERE" });

const { requestId } = await courier.send({
  message: {
    to: {
      email: "wardengenharia@gmail.com",
    },
    template: "ERZCWKCATXMAFTMQ04K4TTKZZC12",
    data: {
    },
  },
});
