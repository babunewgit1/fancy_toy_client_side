import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Toy car | Blog");
  return (
    <section id="blog">
      <div className="mycontainer">
        <div className="galleryHeading pt-20 pb-10">
          <h3 className="text-center text-4xl font-semibold">
            Question and <span className="text-[#ED0EFD]">Answer</span>
          </h3>
        </div>
        <div className="blogWrapper pt-14">
          <div className="blogQuestionOne mb-14">
            <h2 className="text-2xl font-semibold">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <div className="questionAns bg-slate-200 p-8 mt-5 ml-10">
              <p className="font-medium">
                A security token called an access token is employed to
                authenticate and grant access to a restricted resource, such as
                an API. The token is given by an authorization server after a
                user logs in and approves an application. It includes
                information about the user and the application's rights. This
                token enables the application to send API requests on the user's
                behalf. The token has a time limit after which it must be
                replaced. <br /> <br></br>
                When an access token has run out, a refresh token is used to get
                a fresh one. It is pre-loaded with the access token and enables
                you to request a fresh one without logging out beforehand.
                Refresh tokens can be used to get new access tokens for longer
                durations of time because they normally have a long lifespan.
              </p>
            </div>
          </div>
          <div className="blogQuestionOne mb-14">
            <h2 className="text-2xl font-semibold">
              2. Compare SQL and NoSQL databases?
            </h2>
            <div className="questionAns bg-slate-200 p-8 mt-5 ml-10">
              <p className="font-medium">
                <span className="text-xl font-semibold block mb-4">
                  SQL Databases
                </span>
                The relational model is the foundation of SQL databases. Data is
                stored in tables, and each table has a predetermined schema.
                Applications requiring organized and well-defined data, such
                those in banking, finance, and e-commerce, employ SQL databases.
                'SQL databases are renowned for their effectiveness at
                responding to complex queries. They retrieve and work with data
                using a common query language (SQL). Additionally, SQL databases
                are renowned for adhering to the ACID (Atomicity, Consistency,
                Isolation, Durability) standard, which guarantees data
                consistency and integrity. <br /> <br></br>
                <span className="text-xl font-semibold block mb-4">
                  NoSQL Databases
                </span>
                The purpose of NoSQL databases is to manage unstructured and
                semi-structured data. They are utilized in IoT, social media,
                and other applications where data is rapidly changing and poorly
                defined. NoSQL databases can use key-value pairs,
                document-oriented, or graph-based models as data models. They
                are renowned for their high availability, scalability, and
                adaptability. NoSQL databases are also made to manage heavy
                traffic loads and big amounts of data.
              </p>
            </div>
          </div>
          <div className="blogQuestionOne mb-14">
            <h2 className="text-2xl font-semibold">
              3. What is express js? What is Nest JS?
            </h2>
            <div className="questionAns bg-slate-200 p-8 mt-5 ml-10">
              <p className="font-medium">
                <span className="text-xl font-semibold block mb-4">
                  express js
                </span>
                Express JS is a Node.js web framework that is quick,
                open-source, and simple. It is made for creating APIs and online
                applications. A comprehensive collection of functionalities are
                offered by Express JS for both web and mobile applications. It
                is widely utilized, and a sizable developer community
                contributes to its growth.Express JS offers a straightforward
                interface for managing middleware, rendering views, and routing
                HTTP requests. It lets programmers to swiftly create scalable,
                adaptable, and modular web applications. To create dynamic HTML
                pages, Express JS supports a number of templating engines,
                including Pug, EJS, and Handlebars. <br /> <br></br>
                <span className="text-xl font-semibold block mb-4">
                  Nest JS
                </span>
                Nest JS is a framework for creating Node.js-based server-side
                applications that are scalable, effective, and maintainable. It
                uses TypeScript and is built on top of Express.js, making it a
                more organized and type-safe framework. The modular architecture
                offered by Nest JS makes it simpler to create and maintain
                complicated applications by allowing developers to group their
                code into reusable modules. A robust dependency injection
                framework is also included, which makes it simple to manage
                dependencies and develop testable code. Real-time apps,
                microservices, and REST APIs are frequently created with Nest
                JS.
              </p>
            </div>
          </div>
          <div className="blogQuestionOne mb-14">
            <h2 className="text-2xl font-semibold">
              4. What is MongoDB aggregate and how does it work?
            </h2>
            <div className="questionAns bg-slate-200 p-8 mt-5 ml-10">
              <p className="font-medium">
                The aggregate function in MongoDB is a function that permits
                sophisticated data processing and analysis on collections. It
                operates by processing papers through a number of phases. The
                data is subjected to a particular operation or transformation at
                each stage, and the results of one stage serve as the input for
                the next. A stage can group, sort, filter, or transform data.
                The outcome is produced in the last phase. Aggregate provides
                strong data processing capabilities that effectively handle huge
                datasets. There are several phases in the pipeline, including
                $match, $group, $project, $sort, $limit, $skip, and $unwind,
                among others. While the $group stage is used to organize
                documents based on a defined key, the $match stage is used to
                filter documents depending on certain criteria. Selecting
                particular fields from the $project stage is used to.The stages
                $limit and $skip are used to, respectively, limit the number of
                documents retrieved and skip a specific number of documents. The
                $unwind stage is used to create one document for each element of
                the array by breaking down an array field from the input
                documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
