import React from "react";
import moment from "moment";
import { motion } from "framer-motion";

import { ReactComponent as LocationIcon } from "../assets/icon-location.svg";
import { ReactComponent as WebsiteIcon } from "../assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../assets/icon-company.svg";

const ResultCard = ({ data }) => {
  // console.log(data);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="mt-4 sm:mt-6 bg-lightTheme-bg-light dark:bg-darkTheme-bg-light rounded-2xl shadow-light dark:shadow-none duration-150"
    >
      <div className="flex flex-col px-6 pt-8 pb-12 sm:p-12 w-full">
        {/* Top Section */}
        <div className="flex ">
          <img
            src={data.avatar_url}
            alt=""
            className="w-[117px] h-[117px] rounded-full"
          />
          <div className="flex flex-col sm:flex-row sm:justify-between w-full ml-[37px]">
            <div>
              <h1 className="text-lightTheme-text-dark dark:text-darkTheme-text">
                {data.name}
              </h1>
              <a
                href={data.html_url}
                className="text-primary-blue hover:text-button-hover duration-150"
                target="_blank"
                rel="noreferrer"
              >
                @{data.login}
              </a>
            </div>
            <div>
              <p className="text-lightTheme-switch dark:text-darkTheme-text">
                Joined {moment(data.created_at).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
        {/* Rest of the card */}
        <div className="mt-8 sm:mt-0 sm:max-w-[480px] sm:self-end">
          <p className="text-lightTheme-text-light dark:text-darkTheme-text">
            {data.bio}
          </p>
          {/* REPOS, FOLLOWERS, FOLLOWING Section */}
          <div
            className="mt-[23px] sm:mt-8 flex items-center justify-between w-full h-[85px] bg-lightTheme-bg-dark dark:bg-darkTheme-bg-dark
          rounded-xl px-4 sm:px-8 duration-150"
          >
            <div className="gap-2 flex flex-col items-center sm:items-start text-lightTheme-text-light dark:text-darkTheme-text">
              <p className="text-[13px]">Repos</p>
              <p className="text-[22px] font-bold text-lightTheme-text-dark dark:text-darkTheme-text">
                {data.public_repos}
              </p>
            </div>
            <div className="gap-2 flex flex-col items-center sm:items-start text-lightTheme-text-light dark:text-darkTheme-text">
              <p className="text-[13px]">Followers</p>
              <p className="text-[22px] font-bold text-lightTheme-text-dark dark:text-darkTheme-text">
                {data.followers}
              </p>
            </div>
            <div className="gap-2 flex flex-col items-center sm:items-start text-lightTheme-text-light dark:text-darkTheme-text">
              <p className="text-[13px]">Following</p>
              <p className="text-[22px] font-bold text-lightTheme-text-dark dark:text-darkTheme-text">
                {data.following}
              </p>
            </div>
          </div>
          {/* /// */}
          {/* Socials */}
          <div className="flex flex-col sm:flex-row sm:justify-between mt-6 gap-4 sm:gap-0">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Location */}
              <div
                className={`flex items-center text-lightTheme-text-light dark:text-darkTheme-text
               ${
                 !data.location &&
                 "text-lightTheme-social-hover dark:text-darkTheme-social-hover"
               }`}
              >
                <LocationIcon className="mr-4" />
                <p>{data.location ? data.location : "Not Available"}</p>
              </div>
              {/* Website */}
              <div
                className={`flex items-center text-lightTheme-text-light dark:text-darkTheme-text
               ${
                 !data.blog &&
                 "text-lightTheme-social-hover dark:text-darkTheme-social-hover"
               }`}
              >
                <WebsiteIcon className="mr-4" />
                <p>{data.blog ? data.blog : "Not Available"}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Twitter */}
              <div
                className={`flex items-center text-lightTheme-text-light dark:text-darkTheme-text
               ${
                 !data.twitter_username &&
                 "text-lightTheme-social-hover dark:text-darkTheme-social-hover"
               }`}
              >
                <TwitterIcon className="mr-4" />
                <p>
                  {data.twitter_username
                    ? data.twitter_username
                    : "Not Available"}
                </p>
              </div>
              {/* Company */}
              <div
                className={`flex items-center text-lightTheme-text-light dark:text-darkTheme-text
               ${
                 !data.company &&
                 "text-lightTheme-social-hover dark:text-darkTheme-social-hover"
               }`}
              >
                <CompanyIcon className="mr-4" />
                <p>{data.company ? data.company : "Not Available"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
