import NavAfterLog from "../NavAfterLog/NavAfterLog";
import Footer from "../HomeBeforeLog/Footer";
import LatestJobs from "./LatestJobs";
import ScrollToTop from "./ScrollToTop";

function LatestJobsPage() {
    return (
        <>
            <ScrollToTop />
            <div className="Navbar">
                <NavAfterLog />
            </div>

            <div id="Jobs" className="Latest-Jobs mb-10">
                <LatestJobs />
            </div>

            <div id="Contact-Us" className="Footer">
                <Footer />
            </div>
        </>
    );
}

export default LatestJobsPage;