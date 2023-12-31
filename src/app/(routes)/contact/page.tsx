import GithubCard from "~/components/contact/github-card";
import LinkedInCard from "~/components/contact/linkedin-card";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-2 p-4 md:p-10">
      <LinkedInCard />
      <GithubCard />
    </div>
  );
};

export default ContactPage;
