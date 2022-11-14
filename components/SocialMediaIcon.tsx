import Link from 'next/link';

function SocialMediaIcon({ type, url }) {
  return (
    <Link href={url} target='_blank'>
      <i className={`fa-brands ${type} fa-2xl`}></i>

    </Link>
  );
}


export default SocialMediaIcon;
