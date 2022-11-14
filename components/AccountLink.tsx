import Link from 'next/link';

function AccountLink({ name, type, url }) {
	return (
    <Link href={url} target='_blank' className={`link ${type}`}>
      {name}
    </Link>
  );
}

export default AccountLink;
