const apiKey = 'cEAR2QYm7FkzKbX30oMDEwyohp04e67RDClwU7LzrD2N7t_ls4rHbckaJdnXFPqb9iAAtZUOgsAlP6tf2sm0oIUcdYnUOPbLkB8dXfLvYovb-3l1SYd0n4hw0qv3YHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://dkiecorsproxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        })
    }
}

export default Yelp;