import React, { Fragment } from 'react';
import styles from './css/dashboardProfileModal.module.css';
import clsx from 'clsx';
import avatar from "../images/avatar.jpg";

function EditFormCard() {
	return (
		<Fragment>
			<div className="container">
				<div className="row gutters">
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="card h-100">
							<div className="card-body">
								<div className={clsx(styles.account_settings)}>
									<div className={clsx(styles.user_profile)}>
										<div className={clsx(styles.user_avatar)}>
											<img src={avatar} alt=""></img>
										</div>
										<h5 className={clsx(styles.user_name)}>Atwanzire Timothy</h5>
										<h6 className={clsx(styles.user_email)}>tatwanzire@Maxwell.com</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
						<div className="card h-100">
							<div className="card-body">
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mb-2 text-primary">Personal Details</h6>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="fullName">Full Name</label>
											<input type="text" className={clsx(styles.form_control)} id="fullName" placeholder="Enter full name"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="eMail">Email</label>
											<input type="email" className={clsx(styles.form_control)} id="eMail" placeholder="Enter email ID"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="phone">Phone</label>
											<input type="text" className={clsx(styles.form_control)} id="phone" placeholder="Enter phone number"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="website">Website URL</label>
											<input type="url"  className={clsx(styles.form_control)} id="website" placeholder="Website url"></input>
										</div>
									</div>
								</div>
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 className="mt-3 mb-2 text-primary">Address</h6>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="Street">Street</label>
											<input type="name"  className={clsx(styles.form_control)} id="Street" placeholder="Enter Street"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="ciTy">City</label>
											<input type="name"  className={clsx(styles.form_control)} id="ciTy" placeholder="Enter City"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label for="sTate">State</label>
											<input type="text"  className={clsx(styles.form_control)} id="sTate" placeholder="Enter State"></input>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="form-group">
											<label for="zIp">Zip Code</label>
											<input type="text"  className={clsx(styles.form_control)} id="zIp" placeholder="Zip Code"></input>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default EditFormCard;