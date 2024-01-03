/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { SideBar } from "../../Components/Layout/SideBar/SideBar";
import UploadCard from "../../Components/UploadCard/UploadCard";
import FolderIcon from "@mui/icons-material/Folder";
import AddLinkIcon from "@mui/icons-material/AddLink";
import React from "react";
import { FileUpload } from "../../Components/FileUpload/FileUpload";
import { PageContainer } from "../../Components/PageContainer/PageContainer";
import { CustomDialog } from "../../Components/Dialog/Dialog";
import { FcLink } from "react-icons/fc";
import { Link } from "react-router-dom";

export const UploadDocuments: React.FC = () => {
  const [pdfLink, setPdfLink] = React.useState<string>("");
  const [pdfLinkArray, setpdfLinkArray] = React.useState<string[]>([]);

  const handlePdfLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPdfLink(e.target.value);
  };

  const handleAddPdfLink = () => {
    setpdfLinkArray([...pdfLinkArray, pdfLink]);
    setPdfLink("");
  };

  return (
    <PageContainer title="Upload Content" description="upload content page">
      <Box
        sx={{
          display: "flex",
          backgroundColor: "black",
          color: "white",
          gap: "5vw",
        }}
      >
        <SideBar />
        <Box
          sx={{
            color: "white",
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={400}
            sx={{
              letterSpacing: 1,
            }}
          >
            Content Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              letterSpacing: 1,
              mt: 1,
            }}
          >
            Manage your documnets, sources and knowledge which our bot will use
            while talking to you.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} lg={5}>
              <FileUpload />
            </Grid>
            <Grid item xs={12} sm={6} lg={0.5}></Grid>
            <Grid item xs={12} sm={6} lg={5}>
              <Box
                sx={{
                  padding: "1pc",
                }}
              >
                <Typography variant="h5" fontWeight={"bold"}>Upload PDF's Link</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mt: 2,
                    border: "1px solid grey",
                    padding: "2pc 1pc",
                  }}
                >
                  <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    width: "100%"
                  }}>
                  <TextField
                    placeholder="Enter link"
                    value={pdfLink}
                    fullWidth
                    sx={{
                      bgcolor: "white",
                      borderRadius: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                      "& .MuiOutlinedInput-input": {
                        padding: "9px 13px",
                        fontSize: "0.8rem",
                        color: "rgb(38, 38, 38)",
                      },
                    }}
                    onChange={handlePdfLinkChange}
                  />
                  <Button variant="contained" onClick={handleAddPdfLink}>
                    Add
                  </Button>
                  </Box>

                  {pdfLinkArray.length > 0 && (
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">Files</Typography>
                      {pdfLinkArray.map((link) => {
                        return (
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            gap={"10px"}
                          >
                            <FcLink color="blue" size="4vh" />
                            <Link to={`/${link}`} className="pdf_link">
                              <Typography variant="body1">{link}</Typography>
                            </Link>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};
