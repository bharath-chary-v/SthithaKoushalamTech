/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={""} sx={{ display: 'flex' }} alt="SthithaKoushalam.Tech " />
    </Link>
  );
}
