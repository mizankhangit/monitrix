import { Drawer, Switch } from "antd";
import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import ContactUsIntegration from "../integration_form/contactUs_integration";
import EmailIntegration from "../integration_form/email_integration";
import PubblyIntegration from "../integration_form/pubbly_integration";
import PushoverIntegration from "../integration_form/pushover_integration";
import SlackIntegration from "../integration_form/slack_integration";
import TelegramIntegration from "../integration_form/telegram_integration";
import TwilioIntegration from "../integration_form/twilio_integration";
import TwitterIntegration from "../integration_form/twitter_integration";
import WebhookIntegration from "../integration_form/webhook_integration";

const IntegrationMyCard = ({ item }: any) => {
  // Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  // select Field for workspace
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  //Configur Chennel
  const renderForm = () => {
    switch (item?.title) {
      case "Email":
        return (
          <>
            <EmailIntegration />
          </>
        );
      case "Twitter":
        return (
          <>
            <TwitterIntegration />
          </>
        );
      case "Slack":
        return (
          <>
            <SlackIntegration />
          </>
        );
      case "Telegram":
        return (
          <>
            <TelegramIntegration />
          </>
        );
      case "Twilio":
        return (
          <>
            <TwilioIntegration />
          </>
        );
      case "Pushover":
        return (
          <>
            <PushoverIntegration />
          </>
        );
      case "Webhook":
        return (
          <>
            <WebhookIntegration />
          </>
        );
      case "Pabbly":
        return (
          <>
            <PubblyIntegration />
          </>
        );
      case "Need More?":
        return (
          <>
            <ContactUsIntegration />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-y-3 border p-6 hover:shadow-xl

    transition-all"
    >
      <div className="w-[64px] h-[64px]">
        <img
          src={item?.iconSrc}
          alt={item?.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-lg font-medium">{item?.title}</div>
      <p>E-mail is a basic form of outages notifications. Get alerted!</p>
      {item?.type ? (
        <div className="flex justify-center items-center  w-full">
          <button onClick={showDrawer} className="btn btn-white py-1">
            Contact Us
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center  w-full">
          <button onClick={showDrawer} className="btn btn-white py-1">
            Configur
          </button>
          <Switch
            className="custom_switch"
            checkedChildren="Disable"
            unCheckedChildren="Enable"
            defaultChecked
          />
        </div>
      )}
      <Drawer
        title={
          <div className="flex justify-start items-center gap-3">
            <span className="text-lg">{item?.title}</span>
          </div>
        }
        className="custom_drawer"
        placement={"right"}
        contentWrapperStyle={{ maxWidth: "700px", width: "calc(100% - 20px)" }}
        onClose={closeDrawer}
        open={open}
      >
        {renderForm()}
      </Drawer>
    </div>
  );
};

export default IntegrationMyCard;
