import PageWrapper from "../components/page-wrapper";

export default function Layout({ children, ...rest }) {
  return <PageWrapper {...rest}>{children}</PageWrapper>;
}
