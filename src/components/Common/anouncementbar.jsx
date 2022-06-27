import { React, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './css/announce.module.css'
import clsx from 'clsx';


class AnnouncementBar extends Component {
    state = {}
    render() {
        return (
            <div className={clsx("container-fluid", styles.container)}>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        {/* support ukrain banner */}
                        <div class="announcementBarContent_hd8n">Support Ukraine 🇺🇦 <a target="_blank" rel="noopener noreferrer" href="https://opensource.facebook.com/support-ukraine"> Help Provide Humanitarian Aid to Ukraine</a>.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnnouncementBar;