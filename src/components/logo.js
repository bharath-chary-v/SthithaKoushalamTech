/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo1.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo}  sx={{
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
      width: '100%', // Set the default width for all screens
      '@media screen and (min-width: 768px)': {
        width: '200px', // Set a larger width for screens wider than 768px
      },
      '@media screen and (max-width: 767px)': {
        width: '100px', // Set a smaller width for screens up to 767px (mobile)
      },
    }} alt="SthithaKoushalam.Tech " />
    </Link>
  );
}
