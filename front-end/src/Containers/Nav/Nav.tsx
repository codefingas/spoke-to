import React, { ReactElement } from "react";

const Nav = (): ReactElement => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="https://spoke.ai/" className="brand-logo">
          <img
            src="https://spokeai.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0ae7bb7f-6c1f-4f25-9450-293e41c22745%2Fspoke-favicon.png?table=block&id=c413f65a-5eba-4f6b-be30-ae920d145670&spaceId=8cc1d71a-4ac9-4379-a638-13f083826382&width=200&userId=&cache=v2"
            alt="spoke AI Logo"
            width="60px"
          />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/create">Create Task</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
