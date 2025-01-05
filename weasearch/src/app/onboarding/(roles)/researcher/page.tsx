'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { SessionProvider, useSession } from "next-auth/react";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Expert() {
    const router = useRouter();
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
        expertise: '',
        school: '',
        company: '',
        jobTitle: '',
        role: 'Researcher',
        academicGoals: '',
        researchMethodologies: '',
        researchInterests: '',
        firstName: '',
        lastName: ''
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
    const register = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/onboarding", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "credentials": "same-origin",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                console.log("Researcher created successfully.");
                router.push("/");
            } else {
                console.error("Error creating Researcher.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    return (
        <SessionProvider>
            <div className='flex flex-col justify-center px-96 bg-gray-500 '>
                {!isReview ? (<form className='bg-white px-16 mt-16 ' onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="font-semibold text-gray-900 mt-12 text-3xl">Basic Information</h2>
                            <p className="mt-1text-xl text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3 sm:col-start-1">
                                    <label htmlFor="first-name" className="blocktext-xl font-bold text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={e =>
                                                setFormData(prevState => ({
                                                    ...prevState,
                                                    firstName: e.target.value
                                                }))
                                            }
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3 sm:col-start-4">
                                    <label htmlFor="last-name" className="blocktext-xl font-bold text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={e =>
                                                setFormData(prevState => ({
                                                    ...prevState,
                                                    lastName: e.target.value
                                                }))
                                            }
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="linked-in" className="blocktext-xl font-bold text-gray-900">
                                        LINKEDIN PROFILE URL*
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                                            <input required onChange={e => setFormData(prevState => ({
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
                                                autoComplete='languages'
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
                                            autoComplete="phone"
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
                                            autoComplete="school"
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
                                        CURRENT JOB TITLE *
                                    </label>

                                    <div className="mt-2">
                                        <input required
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

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Researcher Preferences</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label htmlFor="research-interests" className="block text-xl font-medium text-gray-900">
                                    Research Interests
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            researchInterests: e.target.value
                                        }))}
                                        id="research-interests"
                                        name="research-interests"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        placeholder="e.g., Artificial Intelligence in Healthcare"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="research-methodologies" className="block text-xl font-medium text-gray-900">
                                    Research Methodologies
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            researchMethodologies: e.target.value
                                        }))}
                                        id="research-methodologies"
                                        name="research-methodologies"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        placeholder="e.g., Qualitative research, case studies"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="academic-goals" className="block text-xl font-medium text-gray-900">
                                    Academic and Career Goals
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            academicGoals: e.target.value
                                        }))}
                                        id="academic-goals"
                                        name="academic-goals"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        placeholder="e.g., Publish in academic journals, gain teaching experience"
                                    />
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
                </form>) :
                    (
                        <div className="bg-white px-16 mt-16 text-black">
                            <h2 className="font-semibold text-gray-900 mt-12 text-3xl">Review</h2>
                            <div className="mt-10 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-6">About You</h3>
                                    <p >First Name: {formData.firstName}</p>
                                    <p className='mt-2'>Last Name: {formData.lastName}</p>
                                    <p className='mt-2'>LinkedIn: {formData.linkedIn}</p>
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
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-6">Researcher Preferences</h3>
                                    <p >Research Interests: {formData.researchInterests || "Not provided"}</p>
                                    <p className='mt-2'>Research Methodology: {formData.researchMethodologies || "Not provided"}</p>
                                    <p className='mt-2'>Academic and Career Goals: {formData.academicGoals || "Not provided"}</p>
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
