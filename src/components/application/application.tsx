import React from 'react'

export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <form>
                <div data-testid="piyawat">test id </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="checkbox" id='terms'>
                        <input type="checkbox" name="" id="" />
                        I agree to
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
