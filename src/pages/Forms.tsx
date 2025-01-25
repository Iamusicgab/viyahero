import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { useState } from "react";
import { useNavigate } from "react-router";
import gcash from "../assets/gcash.png";
import gcashlogo from "../assets/gcash-logo.svg";
import { initializeApp } from "firebase/app";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Forms() {
	const firebaseConfig = {
		apiKey: "AIzaSyDZQuNanlDOO4vxfhUyLVVxsy3wtpVbVXY",
		authDomain: "viyahero-aff89.firebaseapp.com",
		projectId: "viyahero-aff89",
		storageBucket: "viyahero-aff89.firebasestorage.app",
		messagingSenderId: "310521804533",
		appId: "1:310521804533:web:dc1e4fade2038aea2a77bc",
		measurementId: "G-ETZML2LDGQ",
	};
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const storage = getStorage(app);
	const nav = useNavigate();
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, watch } = useForm();
	const { cartTotal, items, emptyCart } = useCart();
	const fromDbti = watch("dbti");

	const submitting = async (data: any) => {
		setLoading(true);
		const file = data.receipt[0]; // Access the uploaded file

		if (file) {
			try {
				// Upload the file to Firebase Storage
				const storageRef = ref(storage, `receipts/${file.name}`);
				await uploadBytes(storageRef, file);
				const imageUrl = await getDownloadURL(storageRef);

				// Prepare data payload
				const payload = {
					name: data.name,
					email: data.email,
					phone: data.phone,
					address: data.address,
					messenger: data.messenger,
					grade: data.grade || "N/A",
					section: data.section || "N/A",
					cartTotal: cartTotal.toString(),
					items: JSON.stringify(items),
					imageUrl, // Include Firebase image URL
				};

				// Save data to Firestore
				const docRef = await addDoc(collection(db, "transactions"), payload);
				console.log("Document written with ID: ", docRef.id);

				// Send data to Google Sheets via Apps Script Web App
				const response = await fetch(
					"https://script.google.com/macros/s/AKfycbxwqC5XWC9jvsVKnCzhA0_MxWkC9b_NnvKr9aRy1WGE54NTm9BZKjCkYe21Z2Okx8vX/exec",
					{
						method: "POST",
						headers: {
							"Content-Type": "text/plain;charset=utf-8",
						},
						body: JSON.stringify(payload),
					}
				);

				if (response.ok) {
					const result = await response.json();
					emptyCart();
					console.log("Success:", result);
					nav("/finish");
				} else {
					console.error("Response error:", response.statusText);
					alert("There was an issue with the transaction.");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("An error occurred. Please try again.");
			} finally {
				setLoading(false);
			}
		} else {
			alert("Please upload a receipt.");
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(submitting)}>
			<div className="font-sans p-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl font-bold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
							Checkout
						</h2>
					</div>
					<div className="mt-12">
						<div className="grid md:grid-cols-3 gap-4">
							<div>
								<h3 className="text-3xl font-bold text-gray-300">01</h3>
								<h3 className="text-xl font-semibold text-gray-800 mt-1">
									Personal Details
								</h3>
							</div>
							<div className="md:col-span-2">
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<input
											type="text"
											placeholder="Full Name"
											autoComplete="name"
											className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
											{...register("name")}
											required
										/>
									</div>
									<div>
										<input
											type="email"
											autoComplete="email"
											placeholder="Email address"
											className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
											{...register("email")}
											required
										/>
									</div>
									<div>
										<input
											type="text"
											autoComplete="tel"
											placeholder="Phone number"
											className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
											{...register("phone")}
											required
										/>
									</div>
									<div>
										<input
											type="text"
											placeholder="Address"
											autoComplete="street-address"
											className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
											{...register("address")}
											required
										/>
									</div>
									<div>
										<input
											type="text"
											placeholder="Facebook Messenger"
											className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
											{...register("messenger")}
											required
										/>
									</div>{" "}
									<div className="grid gap-4">
										<h3 className="text-xl font-semibold text-gray-800 mt-1">
											Are you from Don Bosco Makati?
										</h3>
										<div className=" gap-y-1.5 gap-x-2 grid grid-flow-col w-fit">
											<input
												className="btn"
												type="radio"
												value="Yes"
												aria-label="Yes"
												{...register("dbti")}
											/>
											<input
												className="btn"
												type="radio"
												value="No"
												aria-label="No"
												{...register("dbti")}
											/>
										</div>
									</div>
									{fromDbti === "Yes" && (
										<fieldset className="fieldset flex">
											<select
												defaultValue="Grade"
												className="select w-fit"
												title="Grade"
												{...register("grade")}
												required
											>
												<option disabled={true}>Grade</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="TVET">TVET</option>
												<option value="LaMP">LaMP</option>
											</select>
											<select
												defaultValue="Section"
												className="select w-full"
												title="Section"
												{...register("section")}
												required
											>
												<option disabled={true}>Section</option>
												<option value="Rua">Rua</option>
												<option value="Rinaldi">Rinaldi</option>
												<option value="Versiglia">Versiglia</option>
												<option value="Caravario">Caravario</option>
												<option value="Zatti">Zatti</option>
												<option value="Kowalski">Kowalski</option>
												<option value="Namuncura">Namuncura</option>
												<option value="Srugi">Srugi</option>
												<option value="Beltrami">Beltrami</option>
												<option value="Quadrio">Quadrio</option>
												<option value="Sandor">Sandor</option>
												<option value="Marvelli">Marvelli</option>
												<option value="Cimatti">Cimatti</option>
												<option value="Giordani">Giordani</option>
												<option value="TVET">TVET</option>
												<option value="LaMP">LaMP</option>
											</select>
										</fieldset>
									)}
								</div>
							</div>
						</div>
						<div className="grid md:grid-cols-3 gap-4 mt-12">
							<div>
								<h3 className="text-3xl font-bold text-gray-300">02</h3>
								<h3 className="text-xl font-semibold text-gray-800 mt-1">
									Payment
								</h3>
							</div>
							<div className="md:col-span-2 gap-4 grid">
								<p>
									The default payment method for the Viyahero Online System is
									GCash. Scan the QR Code below and send the payment to the
									number provided.
								</p>
								<div className="border p-4 border-red-500 rounded-md">
									<h3 className="text-xl font-semibold text-red-500 mt-1">
										TOTAL PAYMENT: PHP{cartTotal}
									</h3>
									<h3 className="text-xl font-semibold text-gray-800 mt-1">
										OR
									</h3>
									<h3 className="text-xl font-semibold text-red-500  mt-1">
										DOWN PAYMENT: PHP{cartTotal / 2}
									</h3>
									<p className=" text-black-500  mt-1">
										For downpayments, the remaining balance will be paid upon
										claim of item at the Viyahero booth in Don Bosco Makati.
									</p>
									<p className="font-bold">Pickup Dates: Feb. 1 - Feb. 2</p>
								</div>
								<div className="grid gap-4 items-center ">
									<img src={gcashlogo} alt="GCash Logo" className="w-24" />
									<p className="text-red-500 font-bold italic text-xl">
										Please screenshot the QR Code then upload it in the GCash
										app or simply scan the QR Code.
									</p>
									<img src={gcash} alt="GCash QR Code" className="w-48" />
								</div>
								<fieldset className="fieldset w-full">
									<legend className="fieldset-legend">
										Upload your GCash receipt here
									</legend>
									<input
										title="UPload"
										type="file"
										className="file-input"
										{...register("receipt")}
										required
									/>
									<label className="fieldset-label">Max size 2MB</label>
								</fieldset>
							</div>
						</div>

						<div className="flex flex-wrap justify-end gap-4 mt-12">
							{loading ? (
								<>
									<button type="submit" className="btn btn-primary" disabled>
										Checkout
										<span className="loading loading-spinner loading-xs"></span>
									</button>
								</>
							) : (
								<button type="submit" className="btn btn-primary">
									Checkout
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Forms;
