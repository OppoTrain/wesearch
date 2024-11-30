'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { SessionProvider, useSession } from "next-auth/react";
import { useState } from 'react';
export default function Example() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    linkedIn: '',
    bio: '',
    email: session?.user?.email,
    gender: '',
    streetAddress: '',
    city: '',
    state: '',
    language: '',
    additionalLanguage: '',
    phoneNo: '',
    photo: '',
    expertise:'',
    school:'',
    company:'',
    jobTitle:'',
    role:'student'
  });
  console.log('email :', formData.email);
  const [isReview, setIsReview] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsReview(true); 
  };

  const handleEdit = () => {
    setIsReview(false); 
  };
  const register = () => {
    
  };
  return (
    <SessionProvider>
      <div className='flex flex-col justify-center px-96 bg-gray-500 '>
        {!isReview? (<form className='bg-white px-16 mt-16 ' onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="font-semibold text-gray-900 mt-12 text-3xl">Basic Information</h2>
              <p className="mt-1text-xl text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="linked-in" className="blocktext-xl font-bold text-gray-900">
                    LINKEDIN PROFILE URL
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                      <input onChange={e => setFormData(prevState => ({
                        ...prevState,
                        linkedIn: e.target.value
                      }))}
                        id="linkend-in"
                        name="linked-in"
                        type="text"
                        placeholder="https://www.linkedin.com/in/myLinkedIn"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="blocktext-xl font-medium text-gray-900">
                    BIO*
                  </label>
                  <div className="mt-2">
                    <textarea
                     onChange={e => setFormData(prevState => ({
                      ...prevState,
                      bio: e.target.value
                    }))}
                      id="bio"
                      name="bio"
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue={''}
                      placeholder="I just graduated with my bachelors in Computer Science to become a Software Engineer and I live in the Greater Seattle Area. I found that I prefer backend development and am always looking to learn something new. My goal is to sharpen my skills so I can start my new career!
                  required"
                    />
                  </div>
                  <p className="mt-3text-xl text-gray-600">Write a few sentences about yourself.</p>
                </div>
                <div className="col-span-full">
                  <h2 className="block text-xl font-medium text-gray-900">Age*</h2>
                  <div className="flex items-center mt-3">
                    <input
                      id="age-confirmation"
                      name="age-confirmation"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      required
                    />
                    <label htmlFor="age-confirmation" className="ml-2 text-sm font-medium text-gray-900">
                      I confirm I am over 18 years of age
                    </label>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="gender" className="blocktext-xl font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      gender: e.target.value
                    }))}
                      id="gender"
                      name="gender"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option selected value="">Select Your Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>

                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="language" className="blocktext-xl font-medium text-gray-900">
                    Prefered Language *
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      language: e.target.value
                    }))}
                      id="language"
                      name="language"
                      autoComplete="language"
                      defaultValue="EN"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="" selected>Select Preferred Language</option>
                      <option value="AF">Afrikaans</option>
                      <option value="SQ">Albanian</option>
                      <option value="AR">Arabic</option>
                      <option value="HY">Armenian</option>
                      <option value="EU">Basque</option>
                      <option value="BN">Bengali</option>
                      <option value="BG">Bulgarian</option>
                      <option value="CA">Catalan</option>
                      <option value="KM">Cambodian</option>
                      <option value="ZH">Chinese (Mandarin)</option>
                      <option value="HR">Croatian</option>
                      <option value="CS">Czech</option>
                      <option value="DA">Danish</option>
                      <option value="NL">Dutch</option>
                      <option value="EN">English</option>
                      <option value="ET">Estonian</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finnish</option>
                      <option value="FR">French</option>
                      <option value="KA">Georgian</option>
                      <option value="DE">German</option>
                      <option value="EL">Greek</option>
                      <option value="GU">Gujarati</option>
                      <option value="HE">Hebrew</option>
                      <option value="HI">Hindi</option>
                      <option value="HU">Hungarian</option>
                      <option value="IS">Icelandic</option>
                      <option value="ID">Indonesian</option>
                      <option value="GA">Irish</option>
                      <option value="IT">Italian</option>
                      <option value="JA">Japanese</option>
                      <option value="JW">Javanese</option>
                      <option value="KO">Korean</option>
                      <option value="LA">Latin</option>
                      <option value="LV">Latvian</option>
                      <option value="LT">Lithuanian</option>
                      <option value="MK">Macedonian</option>
                      <option value="MS">Malay</option>
                      <option value="ML">Malayalam</option>
                      <option value="MT">Maltese</option>
                      <option value="MI">Maori</option>
                      <option value="MR">Marathi</option>
                      <option value="MN">Mongolian</option>
                      <option value="NE">Nepali</option>
                      <option value="NO">Norwegian</option>
                      <option value="FA">Persian</option>
                      <option value="PL">Polish</option>
                      <option value="PT">Portuguese</option>
                      <option value="PA">Punjabi</option>
                      <option value="QU">Quechua</option>
                      <option value="RO">Romanian</option>
                      <option value="RU">Russian</option>
                      <option value="SM">Samoan</option>
                      <option value="SR">Serbian</option>
                      <option value="SK">Slovak</option>
                      <option value="SL">Slovenian</option>
                      <option value="ES">Spanish</option>
                      <option value="SW">Swahili</option>
                      <option value="SV">Swedish </option>
                      <option value="TA">Tamil</option>
                      <option value="TT">Tatar</option>
                      <option value="TE">Telugu</option>
                      <option value="TH">Thai</option>
                      <option value="BO">Tibetan</option>
                      <option value="TO">Tonga</option>
                      <option value="TR">Turkish</option>
                      <option value="UK">Ukrainian</option>
                      <option value="UR">Urdu</option>
                      <option value="UZ">Uzbek</option>
                      <option value="VI">Vietnamese</option>
                      <option value="CY">Welsh</option>
                      <option value="XH">Xhosa</option>

                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>

                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="additional-languages" className="blocktext-xl font-bold text-gray-900">
                    Additional Languages
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                      <input
                      onChange={e => setFormData(prevState => ({
                        ...prevState,
                        additionalLanguage: e.target.value
                      }))}
                        id="additional-languages"
                        name="additional-languages"
                        type="text"
                        placeholder="e.g Afrikaans"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="photo" className="blocktext-xl font-medium text-gray-900">
                    Profile Picture
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>


              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Contact Information</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="blocktext-xl font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={session?.user?.email || ''}
                      placeholder={session?.user?.email || ''}
                      disabled
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="blocktext-xl font-medium text-gray-900">
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      country: e.target.value
                    }))}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="" selected>Select Country</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="phone-no" className="blocktext-xl font-medium text-gray-900">
                    Phone Number
                  </label>

                  <div className="mt-2">
                    <input
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      phoneNo: e.target.value
                    }))}
                      id="phone-no"
                      name="phone-no"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Professional Experience</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="blocktext-xl font-medium text-gray-900">
                  EXPERIENCE LEVEL *
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      expertise: e.target.value
                    }))}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="student" selected>Student/Learner - Learning with no professional experience</option>
                      <option value="career changer">Career Changer - Expertise in another field but not in your target field</option>
                      <option value="junior">Junior - Early stage of career</option>
                      <option value="intermediate">Intermediate - Experienced within your career</option>
                      <option value="advanced">Advanced - Solid foundation in career and looking to progress to the next level</option>
                      <option value="senior">Senior - High level of expertise</option>
                      <option value="executive">Executive - Experience in leadership or executive positions</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="phone-no" className="blocktext-xl font-medium text-gray-900">
                    MOST RECENT SCHOOL
                  </label>

                  <div className="mt-2">
                    <input
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      school: e.target.value
                    }))}
                      id="phone-no"
                      name="phone-no"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="phone-no" className="blocktext-xl font-medium text-gray-900">
                  CURRENT COMPANY
                  </label>

                  <div className="mt-2">
                    <input
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      company: e.target.value
                    }))}
                      id="phone-no"
                      name="phone-no"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="phone-no" className="blocktext-xl font-medium text-gray-900">
                  CURRENT JOB TITLE
                  </label>

                  <div className="mt-2">
                    <input
                    onChange={e => setFormData(prevState => ({
                      ...prevState,
                      jobTitle: e.target.value
                    }))}
                      id="phone-no"
                      name="phone-no"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-6 mb-14">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </form>):
        (
          <div className="bg-white px-16 mt-16 text-black">
            <h2 className="font-semibold text-gray-900 mt-12 text-3xl">Review</h2>
            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-6">About You</h3>
                <p >LinkedIn: {formData.linkedIn}</p>
                <p className='mt-2'>Bio: {formData.bio}</p>
                <p className='mt-2'>Gender: {formData.gender}</p>
                <p className='mt-2'>Preferred Language: {formData.language}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-6">Contact Information</h3>
                <p >Email: {formData.email}</p>
                <p className='mt-2'>Phone: {formData.phoneNo || "Not provided"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-6">Professional Experience</h3>
                <p >Expertise: {formData.expertise || "Not provided"}</p>
                <p className='mt-2'>School: {formData.school || "Not provided"}</p>
                <p className='mt-2'>Company: {formData.company || "Not provided"}</p>
                <p className='mt-2'>Job Title: {formData.jobTitle || "Not provided"}</p>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-x-6 mb-14">
              <button
                type="button"
                onClick={handleEdit}
                className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-400"
              >
                Edit
              </button>
              <button
              type="submit"
              onClick={register}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
            </div>
            
          </div>
        )
        }
      </div>
    </SessionProvider>
  )
}
