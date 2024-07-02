interface NavProps {
  title: string;
  links: string[];
}

const Nav = ({ title , links}: NavProps) => (
  <div>
    <span className="block font-[600] text-white mb-8">{title}</span>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link} className="text-main-color">{link}</li>
      ))}
    </ul>
  </div>
)

const FooterNav = () => (
  <div className="flex justify-between w-8/12">
    <Nav title="Features" links={['Link Shortening', 'Branded Links', 'Analytics']} />
    <Nav title="Resources" links={['Blog', 'Developers', 'Support']} />
    <Nav title="Company" links={['About', 'Our Team', 'Careers', 'Contact']} />
  </div>
)

export default FooterNav;