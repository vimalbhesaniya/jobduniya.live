import React, { useCallback, useMemo } from "react";
import NavbarBeforeLogin from "../login/NavbarBeforeLogin";
import FormButton from "../Common/FormButton";
import { useNavigate } from "react-router-dom";
import css from "../../Style/inputBoxs.module.css";
import Footer from "./Footer";
const TermAndConditions = () => {
  const navigate = useNavigate("");
  const modifiedDate = useMemo(() => {
    return Date();
  }, [TermAndConditions]);
  return (
    <>
      <NavbarBeforeLogin
        leftSection={
          <FormButton
            text={"Sign Up"}
            className={css.primaryButton}
            onClick={() => navigate("/signup")}
          />
        }
      />
      <div class="bodyTermPage">
        <div class="containerTermPage">
          <div className="Heading">
            <h3><strong><i class="fa fa-book"></i> Terms &amp; Conditions</strong></h3>
          </div>
          <div className="mainTermPage">
            <p class="pTermPage">The User of the Job Portal / website (hereinafter referred to as <strong>“User”</strong>) agrees to the following terms and conditions, including any future amendments (hereinafter collectively referred to as the <strong>“Terms &amp; Conditions”</strong>) before using the Job Portal / website www.freshtechjobs.com (hereinafter referred to as <strong>“Job Portal”</strong>). By using the Job Portal, the Users are giving their consent to be bound by the stipulations as contained under the caption <strong>“Terms &amp; Conditions”</strong> below.</p>
            <h2 class="pTermPage"><strong>Purpose of the Job portal:</strong></h2>
            <p class="pTermPage">The purpose of the job portal is to reduce the job search gap between technical freshers viz. students of passed out Diploma, Bachelor, Master with Technical Degrees and Companies who recruit technical freshers.</p>
            <h2><strong>Terms &amp; Conditions:</strong></h2>

            <p class="pTermPage"><strong>1.</strong> These Terms and Conditions and the Privacy Policy Statement which are hereby incorporated as if set forth fully herein, represent the complete agreement between you and the Company for the use of and access to the Services and/or other contents of the Job Portal.</p>
            <p class="pTermPage"><strong>2.</strong> The job portal reserves the right to decline service/registration to any person at any point of time without giving any prior notice. It is clarified that registering with the portal does not guarantee employment.</p>
            <p class="pTermPage"><strong>3.</strong> The User agrees that the services of the job portal, once subscribed to by the User are not refundable and all amount/s paid shall stand appropriated.</p>
            <p class="pTermPage"><strong>4.</strong> Nothing in this Agreement shall be deemed to confer any third-party rights or benefits.</p>
            <p class="pTermPage"><strong>5.</strong> The job portal authorizes the User to view and access the content available on or from the Job Portal solely for their personal use. The contents of the Job Portal and of all other websites, whether partial or otherwise such as text, graphics, images, logos, button icons, software and other contents as well as compilation of contents (i.e. the collection, arrangement and assembly), are property of the job portal . Unauthorized use of such Content will be violation of copyright and other intellectual property rights of the job portal. The User may not sell or modify the said content or reproduce, display, publicly perform, distribute, or otherwise use such content in any way for any public or commercial purpose. The use of the job portal’s content on any other web site or in a networked computer environment for any purpose is prohibited.</p>
            <p class="pTermPage"><strong>6.</strong> The User shall be solely responsible for maintaining the confidentiality of their account and passwords. The User shall be solely responsible for all activities happening under his/her username whether authorized or not. The User agrees to immediately notify the Company of any unauthorized use of his Account and Password.</p>
            <p class="pTermPage"><strong>7.</strong> The job portal reserves the right to modify, suspend, cancel, discontinue or terminate the services of the Job Portal or reject any or all entries/blogs at their absolute discretion without giving any prior notice and without assigning any reason whatsoever to the User and without any liability to the job portal.</p>
            <p class="pTermPage"><strong>8.</strong> The User shall be responsible for use of the Job Portal, for any entries/posts that he uploads/makes, and for any consequences arising therefrom. The User agrees that he shall use the Job Portal in accordance with all laws, rules and regulations, as applicable from time to time, including, without limitation, the Information Technology law and laws relating to unfair competition, anti discrimination, false advertising and defamation. The User further agrees that the usage of Job Portal by the User shall not violate any third party rights including but not limited to Intellectual Property Rights, Right of Privacy and Right of Publicity. In addition to above, the User agrees that he shall not use the Job Portal in order to transmit, distribute, store or destroy material, that is defamatory, obscene, threatening, abusive or hateful including, without limitation, the job portal’s content. Any violation of any of the foregoing, including the terms and conditions mentioned herein shall result in the immediate termination of the User’s right to access the job portal.</p>
            <p class="pTermPage"><strong>9.</strong> The Users are prohibited from violating or attempting to violate the security of the Job Portal, including, <strong>without limitation the following activities: (a)</strong> accessing data not intended for such User or logging into a server or account which the User is not authorized to access; <strong>(b)</strong> attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization; <strong>(c)</strong> attempting to interfere with service to any User, host or network, including, without limitation, via means of submitting a virus to Job Portal, overloading, <strong>“flooding”</strong> , <strong>“spamming”</strong> , <strong>“mailbombing”</strong> or <strong>“crashing”</strong> ; or <strong>(d)</strong> forging any TCP/IP packet header or any part of the header information in any e-mail or newsgroup posting. Violations of system or network security shall result in civil or criminal liability. The Company will investigate occurrences, which may involve such violations and shall inform and co-operate with, law enforcement authorities in prosecuting Users who are involved in such violations.</p>
            <p class="pTermPage"><strong>10.</strong> The contents of specific postings made by the User are posted and are the responsibility of the User who makes such postings. Though the job portal reserves the right to filter out postings which may carry offensive, harmful, inaccurate, pornographic content or content which infringes on the Intellectual Property Rights of any third party or any rights of publicity or privacy or is defamatory, libelous, threatening or harassing or is indecent and contains any viruses, trojan horses, trap doors, back doors, easter eggs, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information or otherwise inappropriate content, it does not take any responsibility for such content and/or for deceptive, mislabeled or defamatory content. The job portal merely provides a platform to access the content posted by the Users by using the Services of the Job portal. The Users are expected to take necessary precautions and comply with various provisions of laws while uploading any contents on the Job Portal.</p>
            <p class="pTermPage"><strong>11.</strong> The job portal specifically prohibits the posting of User’s content, which provides the following and/or has the effect of the following. The list below is for illustration only and is not a comprehensive list of all prohibited User Content. <strong>The User Content:-</strong>
              <ol>
                <p class="pTermPage"><strong>1.</strong> is implicitly or explicitly offensive, such as User Content that engages in, endorses or promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;</p>
                <p class="pTermPage"><strong>2.</strong> harass, incites harassment or advocates harassment of another group or individual;</p>
                <p class="pTermPage"><strong>3.</strong> involves the transmission of “junk mail”, “chain letters,” or unsolicited mass mailing or “spamming”;</p>
                <p class="pTermPage"><strong>4.</strong> promotes or endorses false or misleading information or illegal activities or conduct that is abusive, threatening, obscene, defamatory, libelous or which amounts to contempt of any judicial authority;</p>
                <p class="pTermPage"><strong>5.</strong> promotes or endorses an illegal or unauthorized use of any copyrighted work, such as providing or making available pirated computer programs or links to them, providing or making available information to circumvent manufacturer-installed copy-protect devices, or providing or making available pirated music or other media or links to pirated music or other media files;</p>
                <p class="pTermPage"><strong>6.</strong> contains restricted or password only access pages, or hidden pages or images;</p>
                <p class="pTermPage"><strong>7.</strong> displays or links to obscene, indecent pornographic, material of any kind;</p>
                <p class="pTermPage"><strong>8.</strong> provides instructional information about illegal activities or other activities prohibited by these Terms, including, without limitation, making or buying illegal weapons, violating someone’s privacy, or provides or creates computer viruses or pirating any media; and solicits passwords or personal identifying information from other Users;</p>
              </ol>
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default TermAndConditions;
