import React from "react";

const TelegramIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium"> Update Telegram Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="chatId" className="input_label">
            Telegram Chat ID
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="chatId"
            placeholder="Telegram Chat ID"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>

        <div className="mt-4">
          <label htmlFor="slackChannel" className="input_label">
            Telegram Chat Token <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="slackChannel"
            placeholder="Telegram Chat Token"
            className="input_field"
          />
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button type="button" className="btn btn-white">
            Test
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <div>
        <ul className="flex  flex-col gap-1 list-disc ml-4 p-0">
          <li>
            <span>Create a bot, Just talk to</span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> BotFather </span>
            </a>
            and follow a few simple steps
          </li>

          <li>
            <span>Use the / newbot command to dreate a new bot.</span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> (Details) </span>
            </a>
          </li>

          <li>
            Set name and username of your bot, Bot's username must end in 'bot',
            e.g. 'tetris_bot' or 'TetrisBot'
          </li>

          <li>Copy the displayed token</li>

          <li>
            <span>Talk to</span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> get id bot </span>
            </a>
            and get your chat id
          </li>

          <li>Your Telegram setup is done!</li>
        </ul>
      </div>
    </div>
  );
};

export default TelegramIntegration;
