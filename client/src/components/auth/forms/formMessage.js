export const Header = ({ message, link, component }) => {
  <Message>
    {message}{" "}
    <Link to="${link}" component={component}>
      Sign Up
    </Link>
  </Message>;
};
