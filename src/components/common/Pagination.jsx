import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import SideMenu from "./SideMenu";
import axios from "axios";
import "../../assets/css/pagination.css";
import PaginationData from "../utils/paginationdata";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const setPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  //Get currentPosts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Implement page numbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const lastElementofArray = pageNumbers[pageNumbers.length - 1];
  const firstElementofArray = pageNumbers[0];
  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
          <Typography variant="h5" sx={{ marginTop: "2%", marginLeft: "2%" }}>
            Pagination Example
          </Typography>
          <Box>
            {currentPosts.map((item) => (
              <>
                <Typography>{item.title}</Typography>
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src={item.thumbnailUrl}
                />
              </>
            ))}
          </Box>
          <Box sx={{ marginBottom : "5%"}}>
            {/* Pagination */}
            <div
              className="pagination"
              style={{
                display: "flex",
                maxWidth: 640,
                margin: "40px auto 0",
              }}
            >
              {currentPage !== firstElementofArray && (
                <span rel="prev" className="prev" onClick={handlePrevious}>
                  Prev
                </span>
              )}

              <PaginationData
                pageCount={pageNumbers.length}
                pageIndex={currentPage}
                setPageIndex={setPage}
              />

              {currentPage !== lastElementofArray && (
                <span rel="next" className="next" onClick={handleNext}>
                  Next
                </span>
              )}
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Pagination;
