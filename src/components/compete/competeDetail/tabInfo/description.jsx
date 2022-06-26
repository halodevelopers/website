import React, { Component } from 'react';

class DescriptionDetail extends Component {
    state = {}
    render() {
        return (
            <div className='top-margin mt-2'>
                <h5 style={{fontSize:"16px"}} id='description'>Description</h5>
                <p style={{fontSize:"14px"}}>
                    The objective of this competition is to create a machine learning model to help Kenyan
                    non-profit organization Local Ocean Conservation anticipate the number of turtles they will
                    rescue from each of their rescue sites as part of their By-Catch Release Programme.

                    The data used to train the model will be historic data on the number of turtles rescued
                    from each site from 1998 until 2018. To date, Local Ocean Conservation has released over
                    10,000 sea turtles.

                    An accurate prediction will enable Local Ocean Conservation to allocate staff and resources
                    more efficiently.

                    About Local Ocean Conservation (LOC) (localocean.co):

                    LOC is a private, not-for-profit organisation committed to the protection of Kenya’s
                    marine environment. LOC supports the communities and coastal areas in Watamu and Diani,
                    Kilifi County with marine conservation and community development projects – centered around a
                    holistic approach to conservation. LOC has been doing marine conservation for over 20 years.

                </p>
            </div>
        );
    }
}

export default DescriptionDetail;