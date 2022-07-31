import {env} from "@env"

const ENV = {
  dev: {
    rest_api: "https://i312ipsw5a.execute-api.eu-central-1.amazonaws.com/api",
    client_id: "7q86i3ip3batphs516doitjj0v",
    login_callback: "exp://192.168.1.102:19000",
    logout_callback: "exp://192.168.1.102:19000",
  },
  prod: {
    rest_api: "https://i312ipsw5a.execute-api.eu-central-1.amazonaws.com/api",
    client_id: "374fmh31lmpl8ae7gvfnto4mjp",
    login_callback: "onehundredquestions://",
    logout_callback: "onehundredquestions://",
  },
  "expo-prod": {
    rest_api: "https://i312ipsw5a.execute-api.eu-central-1.amazonaws.com/api",
    client_id: "7l6lqrrr8qci6l9264cbnh5vo7",
    login_callback: "exp://exp.host/@b.bellafkir/one-hundred-questions",
    logout_callback: "exp://exp.host/@b.bellafkir/one-hundred-questions",
  },
};

export const config = () => {
  return ENV[env ? env : "prod"];
};
