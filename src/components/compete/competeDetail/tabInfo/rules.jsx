import React, { Component } from 'react';

class Rules extends Component {
    state = {}
    render() {
        return (
            <div className='container top-margin mt-5'>
                <h6 style={{fontSize:"16px"}} id='rules'>Rules</h6>
                <p style={{fontSize:"14px"}}>
                    As this is a learning challenge, aside from the rules in the Terms of Use, no other particular rules apply.

                    This challenge is open to all and not restricted to any country.
                </p>
                <h6 style={{fontSize:"16px"}}>
                    Teams and collaboration
                </h6>
                <p style={{fontSize:"14px"}}>

                    You may participate in this competition as an individual or in a team of up to four people. When creating a team,
                    the team must have a total submission count less than or equal to the maximum allowable submissions as of the
                    formation date. A team will be allowed the maximum number of submissions for the competition, minus the highest
                    number of submissions among team members at team formation.
                    Multiple accounts per user are not permitted, and neither is collaboration or membership across multiple teams.
                    Individuals and their submissions originating from multiple accounts will be disqualified.
                    Code must not be shared privately outside of a team. Any code that is shared, must be made available to all
                    competition participants through the platform. (i.e. on the discussion boards).
                </p>
                <h6 style={{fontSize:"16px"}}>
                    Datasets and packages
                </h6>
                <p style={{fontSize:"14px"}}>

                    The solution must use publicly-available, open-source packages only. Your models should not use any of the metadata provided.
                    You may use only the datasets provided for this competition. Automated machine learning tools such as automl are not permitted.
                    If the challenge is a computer vision challenge, image metadata (Image size, aspect ratio, pixel count, etc) may not be used in your submission.
                    You may only use the data sets provided. External data is not allowed.
                    You may use pretrained models as long as they are openly available to everyone.
                    The data used in this competition is the sole property of Zindi and the competition host. You may not transmit, duplicate,
                    publish, redistribute or otherwise provide or make available any competition data to any party not participating in the
                    Competition (this includes uploading the data to any public site such as Kaggle or GitHub). You may upload,
                    store and work with the data on any cloud platform such as Google Colab, AWS or similar, as long as 1)
                    the data remains private and 2) doing so does not contravene Zindi’s rules of use.
                    You must notify Zindi immediately upon learning of any unauthorised transmission of or
                    unauthorised access to the competition data, and work with Zindi to rectify any unauthorised transmission or access.
                    Your solution must not infringe the rights of any third party.
                </p>
                <h6 style={{fontSize:"16px"}}>
                    Submissions and winning
                </h6>
                <p style={{fontSize:"14px"}}>
                    You may make a maximum of 10 submissions per day.
                    Note that to count, your submission must first pass processing. If your submission fails during the processing step,
                    it will not be counted and not receive a score; nor will it count against your daily submission limit. If you encounter
                    problems with your submission file, your best course of action is to ask for advice on the Competition’s discussion forum.
                    Note that there is no public/private leaderboard split for this challenge.
                    You acknowledge and agree that Zindi may, without any obligation to do so, remove or disqualify an individual, team,
                    or account if Zindi believes that such individual, team, or account is in violation of these rules. Entry into this
                    competition constitutes your acceptance of these official competition rules.
                    Zindi also reserves the right to disqualify you and/or your submissions from any competition if we believe that you
                    violated the rules or violated the spirit of the competition or the platform in any other way. The disqualifications are irrespective of your position on the leaderboard and completely at the discretion of Zindi.
                    Please refer to the FAQs and Terms of Use for additional rules that may apply to this competition. We reserve the right to update these rules at any time.
                    Zindi
                </p>
            </div >
        );
    }
}

export default Rules;