const PRODUCT_QUERY = `query{
    products{
      data{
        attributes{
          title,
          price,
          description,
          slug,
          image{
            data{
              attributes{
               formats
              }
            }
          }
        }
      }
    }
  }`;

const GET_PRODUCT_DETAIL_QUERY = `
query getProduct($slug: String!){
  products(filters: {slug: {eq: $slug}}){
    data{
      attributes{
        title,
        price,
        description,
        slug,
        image{
          data{
            attributes{
             formats
            }
          }
        }
      }
    }
  }
}`;

export { PRODUCT_QUERY, GET_PRODUCT_DETAIL_QUERY };
