import { biography } from "~/lib/config";

const InvisibleSocialLinks = () => (
  <nav className="invisible absolute top-[-120px]" aria-label="Social Profiles">
    <ul>
      {biography.socialProfiles.map((profile) => (
        <li key={profile.platform}>
          <a href={profile.url} aria-label={`Link to ${profile.platform}`}>
            {profile.platform}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default InvisibleSocialLinks;
