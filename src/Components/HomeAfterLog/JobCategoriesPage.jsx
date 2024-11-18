import NavAfterLog from "../NavAfterLog/NavAfterLog";
import Footer from "../HomeBeforeLog/Footer";
import JobCategories from "./JobCategories";
import ScrollToTop from "./ScrollToTop";


function LatestJobsPage() {
    return (
        <>
            <ScrollToTop />

            <div className="Navbar">
                <NavAfterLog />
            </div>

            <div id="Categories" className="Latest-Jobs mt-10 mb-10">
                <JobCategories />
            </div>

            <div id="Contact-Us" className="Footer">
                <Footer />
            </div>
        </>
    );
}

export default LatestJobsPage;