"use client";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import Image from "next/image";
import { Collapse, Drawer } from "@mui/material";
import { redirectWhatsapp } from "@/src/utils/functions";

export default function Header({ showBorder = true, hasBackground = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(false);
  const open = Boolean(anchorEl);
  const whatsappLink = redirectWhatsapp();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setOpenCollapse(false); // Cerrar collapse al cerrar el menú móvil
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el estado al hacer scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor:
          isScrolled || hasBackground ? "#511011" : "transparent",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow:
          isScrolled && showBorder ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "",
        zIndex: 20, // Asegura que el header esté sobre el video
      }}
    >
      <Toolbar className="w-full sm:w-[1200px] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" aria-label="Inicio">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo-white.png"
              alt="Logotipo de Jurídicos y Asociados"
              width={48}
              height={48}
            />
            <h1 className="text-white text-xl hidden sm:block">
              JURÍDICOS Y ASOCIADOS
            </h1>
          </div>
        </Link>

        {/* Menú principal en escritorio */}
        <nav className="hidden sm:flex space-x-8 items-center">
          <Link href="/">
            <MenuItem className="text-white">Inicio</MenuItem>
          </Link>
          <button
            aria-controls="especialidades-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="text-white"
          >
            Especialidades
          </button>
          <Menu
            id="especialidades-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <Link href="/servicios/derecho-civil">
              <MenuItem>Derecho Civil</MenuItem>
            </Link>
            <Link href="/servicios/derecho-de-familia">
              <MenuItem>Derecho de Familia</MenuItem>
            </Link>
            <Link href="/servicios/derecho-penal">
              <MenuItem>Derecho Penal</MenuItem>
            </Link>
          </Menu>
          <Link href="/blog">
            <MenuItem className="text-white">Artículos</MenuItem>
          </Link>
          <Link href="/contacto">
            <MenuItem className="text-white">Contacto</MenuItem>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white rounded py-2 px-6"
          >
            Contáctanos
          </a>
        </nav>

        {/* Menú móvil */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleMobileMenu}
          className="sm:hidden"
        >
          <Image src="/icons/menu.svg" alt="Menú" width={32} height={32} />
        </IconButton>
      </Toolbar>

      {/* Drawer del menú móvil */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        transitionDuration={300}
      >
        {/* Contenido del Drawer */}
        <div className="w-screen bg-primary h-screen text-white">
          <div className="flex justify-between p-4">
            <Link href="/">
              <Image
                src="/images/logo-white.png"
                alt="Logo"
                width={64}
                height={64}
              />
            </Link>
            <IconButton onClick={toggleMobileMenu}>
              <Image
                src="/icons/close.svg"
                alt="Cerrar"
                width={32}
                height={32}
              />
            </IconButton>
          </div>
          <nav>
            <MenuItem onClick={toggleMobileMenu}>
              <Link href="/">Inicio</Link>
            </MenuItem>
            <MenuItem onClick={() => setOpenCollapse(!openCollapse)}>
              Especialidades
            </MenuItem>
            <Collapse in={openCollapse}>
              <MenuItem>
                <Link href="/servicios/derecho-civil">Derecho Civil</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/servicios/derecho-de-familia">
                  Derecho de Familia
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/servicios/derecho-penal">Derecho Penal</Link>
              </MenuItem>
            </Collapse>
            <MenuItem onClick={toggleMobileMenu}>
              <Link href="/blog">Artículos</Link>
            </MenuItem>
            <MenuItem onClick={toggleMobileMenu}>
              <Link href="/contacto">Contacto</Link>
            </MenuItem>
          </nav>
        </div>
      </Drawer>
    </AppBar>
  );
}
