import PageWrapper from "../components/page-wrapper";
import FullScreenLoader from "../components/loader";

export default function Layout({ isLoading = false, children, ...rest }) {
  return (
    <PageWrapper {...rest}>
      {isLoading && <FullScreenLoader />}
      {children}
    </PageWrapper>
  );
}
