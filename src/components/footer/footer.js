/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: 'rgba(69, 87, 97, 0.8)',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [10, 20],
          paddingBottom: [10, 35],
        }}
      >
        <Box sx={styles.left}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved 
           c
          </Text>
        </Box>
        {/* <Box sx={styles.right}>
          <Link path="/" label="Home" />
          <Link path="/" label="Adversite" />
          <Link path="/" label="Supports" />
          <Link path="/" label="Marketing" />
          <Link path="/" label="FAQ" />
        </Box> */}
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
};
