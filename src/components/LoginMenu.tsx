import { useState } from "react";
import logo from "../assets/logo.svg";
import git from "../assets/github.svg";
import bit from "../assets/bitbucket.svg";
import azure from "../assets/azure-devops.svg";
import gitlab from "../assets/gitlab.svg";
import icon from "../assets/Icon.svg";

type Option = {
  href: string;
  imgSrc: string;
  alt: string;
  text: string;
};

const LoginMenu: React.FC = () => {
  const [saas, setSaas] = useState<boolean>(true);

  const saasOptions: Option[] = [
    { href: "/repository", imgSrc: git, alt: "github", text: "Sign in with Github" },
    { href: "/repository", imgSrc: bit, alt: "bitbucket", text: "Sign in with Bitbucket" },
    { href: "/repository", imgSrc: azure, alt: "azure-devops", text: "Sign in with Azure Devops" },
    { href: "/repository", imgSrc: gitlab, alt: "gitlab", text: "Sign in with GitLab" },
  ];

  const selfHostedOptions: Option[] = [
    { href: "/repository", imgSrc: gitlab, alt: "gitlab", text: "Self Hosted GitLab" },
    { href: "/repository", imgSrc: icon, alt: "sso", text: "Sign in with SSO" },
    // invisible divs so that height remains same of the div
    { href: "/", imgSrc: "", alt: "", text: "" },
    { href: "/", imgSrc: "", alt: "", text: "" },
  ];

  const renderOptions = (options: Option[]) => (
    <div className="flex items-center flex-col justify-center w-full gap-4 max-w-[400px]">
      {options.map(({ href, imgSrc, alt, text }, index) => {
        if (text === "") {
          return (
            <a
              key={index}
              href={href}
              className="border items-center flex w-full gap-4 p-3 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
              style={{
                fontFeatureSettings: "'liga' off, 'clig' off",
                visibility: "hidden",
              }}
            >
              <img style={{ visibility: "hidden" }} src={imgSrc} alt={alt} className="w-6 h-6" />
              {text}
            </a>
          );
        }
        return (
          <a
            key={index}
            href={href}
            className="border items-center flex w-full gap-4 p-3 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            <img src={imgSrc} alt={alt} className="w-6 h-6" />
            {text}
          </a>
        );
      })}
    </div>
  );

  return (
    <div className="flex p-6 max-lg:p-4 flex-col justify-center items-center gap-8 flex-1 bg-[#FAFAFA]">
      <div className="bg-white flex flex-col rounded-xl w-full  border shadow-[0px_1px_2px_0px_var(--Colors-Effects-Shadows-shadow-xs,_rgba(10,_13,_18,_0.05))] border-[#E9EAEB]">
        <div className="border-b flex flex-col py-9 px-6 max-lg:px-4 w-full gap-4 gap-y-6">
          <div className="flex flex-col gap-y-9 max-lg:gap-y-6">
            <div className="flex items-center justify-center p-2" style={{ gap: "13.76px" }}>
              <img className="w-[35.622px] h-[40px]" src={logo} alt="logo" />
              <span className="text-[#181D27] text-[30px] leading-[33px] font-satoshi font-normal">CodeAnt AI</span>
            </div>

            <div className="flex justify-center items-center w-full h-[48px] text-[#181D27] text-center text-3xl font-semibold leading-[48px] font-inter gap-[20px]">
              Welcome to CodeAnt AI
            </div>
          </div>

          <div className="bg-[#FAFAFA] border rounded-xl flex">
            <button
              className={`p-3 rounded-xl w-1/2 ${
                saas
                  ? "bg-[#1570EF] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05),0px_1px_2px_rgba(10,13,18,0.05)] text-white"
                  : ""
              }`}
              onClick={() => setSaas(true)}
            >
              SAAS
            </button>
            <button className={`p-3 rounded-xl w-1/2 ${saas ? "" : "bg-[#1570EF] text-white"}`} onClick={() => setSaas(false)}>
              Self Hosted
            </button>
          </div>
        </div>

        <div className="flex flex-col py-6 px-0">
          <div className="flex items-center justify-center w-full font-inter">
            {saas ? renderOptions(saasOptions) : renderOptions(selfHostedOptions)}
          </div>
        </div>
      </div>

      <div>
        <span
          className="text-[#181D27] text-center text-[16px] font-normal leading-[24px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          By signing up you agree to the <b className="font-bold">Privacy Policy</b>.
        </span>
      </div>
    </div>
  );
};

export default LoginMenu;
