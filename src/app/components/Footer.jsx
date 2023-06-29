import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Footer = () => {
   return (
      <Box
         component="footer"
         sx={{
            backgroundColor: (theme) =>
               theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
            p: 6,
         }}
      >
         <Container maxWidth="lg">
            <Grid container spacing={5}>
               <Grid item xs={12} sm={3}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                     About Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginBottom={2}>
                     We are MediCureHub, dedicated to providing the best service to our patients.
                  </Typography>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                     Contact Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     123 Main Street, Anytown, USA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Email: info@example.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Phone: +1 234 567 8901
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={3}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                     <MedicalServicesIcon></MedicalServicesIcon> Our Services
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                     <Link
                        href="/"
                        underline="hover"
                        sx={{
                           color: (theme) =>
                              theme.palette.mode === "light"
                                 ? theme.palette.grey[600]
                                 : theme.palette.grey[400],
                        }}
                     >
                        Home
                     </Link>
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                     <Link
                        href="/page"
                        underline="hover"
                        sx={{
                           color: (theme) =>
                              theme.palette.mode === "light"
                                 ? theme.palette.grey[600]
                                 : theme.palette.grey[400],
                        }}
                     >
                        Pages
                     </Link>
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                     <Link
                        href="/contact"
                        underline="hover"
                        sx={{
                           color: (theme) =>
                              theme.palette.mode === "light"
                                 ? theme.palette.grey[600]
                                 : theme.palette.grey[400],
                        }}
                     >
                        Contact Us
                     </Link>
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                     <Link
                        href="/blogs"
                        underline="hover"
                        sx={{
                           color: (theme) =>
                              theme.palette.mode === "light"
                                 ? theme.palette.grey[600]
                                 : theme.palette.grey[400],
                        }}
                     >
                        Blogs
                     </Link>
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                     <Link
                        href="/services"
                        underline="hover"
                        sx={{
                           color: (theme) =>
                              theme.palette.mode === "light"
                                 ? theme.palette.grey[600]
                                 : theme.palette.grey[400],
                        }}
                     >
                        Services
                     </Link>
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                     <HourglassEmptyIcon></HourglassEmptyIcon> Hospital Hours
                  </Typography>
                  <TableContainer component={Paper} sx={{ bgcolor: "transparent", color: "#01BDB2" }}>
                     <Table aria-label="simple table">
                        <TableBody>
                           <TableRow sx={{ "&:last-child td": { border: 0 } }}>
                              <TableCell component="th" scope="row">
                                 <AccessTimeIcon />
                              </TableCell>
                              <TableCell align="right">Saturday - Sunday</TableCell>
                              <TableCell align="right">10:00-20:00</TableCell>
                           </TableRow>
                           <TableRow sx={{ "&:last-child td": { border: 0 } }}>
                              <TableCell component="th" scope="row">
                                 <AccessTimeIcon />
                              </TableCell>
                              <TableCell align="right">Monday - Wednesday</TableCell>
                              <TableCell align="right">10:00-9:59</TableCell>
                           </TableRow>
                           <TableRow sx={{ "&:last-child td": { border: 0 } }}>
                              <TableCell component="th" scope="row">
                                 <AccessTimeIcon />
                              </TableCell>
                              <TableCell align="right">Thursday - Friday</TableCell>
                              <TableCell align="right">10:00-24:00</TableCell>
                           </TableRow>
                        </TableBody>
                     </Table>
                  </TableContainer>
                  <Box
                     sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 2 }}
                  >
                     <Typography variant="h6" color="text.primary" gutterBottom>
                        Emergency
                     </Typography>
                     <Typography color="text.primary">Always Open 24*7</Typography>
                  </Box>
               </Grid>
               <Grid item xs={12} sm={2}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                     <PersonAddAltIcon></PersonAddAltIcon> Follow Us
                  </Typography>
                  <Link href="https://www.facebook.com/" color="inherit">
                     <Facebook />
                  </Link>
                  <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                     <Instagram />
                  </Link>
                  <Link href="https://www.twitter.com/" color="inherit">
                     <Twitter />
                  </Link>
               </Grid>
            </Grid>
            <Box mt={5}>
               <Typography variant="body2" color="text.secondary" align="center">
                  {"Copyright © "}
                  <Link color="inherit" href="https://your-website.com/">
                     MediCure
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Footer;
