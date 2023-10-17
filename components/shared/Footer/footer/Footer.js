import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px 0;
  font-size: 14px;
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-copyright-bar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright-info {
    font-size: 14px;
    margin: 0 auto;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterBottom = () => {
  return (
    <Footer id="colophon" className="site-footer footer-v1">
      <div className="container">
        <div className="footer-copyright-bar-inner">
          <div className="copyright-info">© 2023 <a href="#">Moyyn</a>. All rights reserved.</div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBottom;
