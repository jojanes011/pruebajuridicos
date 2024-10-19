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
    // Asegura que el colapso se cierre al cerrar el menú móvil
    if (mobileMenuOpen) {
      setOpenCollapse(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado cuando el scroll pasa 100px, por ejemplo
      setIsScrolled(window.scrollY > 100);
    };

    // Agrega el evento de escucha de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor:
          isScrolled || hasBackground ? "#511011" : "transparent",
        transition: "background-color 0.3s",
        boxShadow: showBorder ? "0 0 0 0.5px white" : "",
      }}
      className="text-white"
    >
      <Toolbar className="w-full sm:w-[1200px] mx-auto" disableGutters>
        <div className="sm:flex flex-1 py-4 hidden">
          <Link
            href="/"
            aria-label="Inicio"
            className="relative flex flex-row items-center space-x-8"
          >
            <Image
              src="/images/logo-white.png"
              alt="Logotipo de Jurídicos y Asociados"
              width={64}
              height={64}
            />
            <h1 className="font-merriweather text-xl">JURÍDICOS Y ASOCIADOS</h1>
          </Link>
        </div>

        {/* Menú móvil */}
        <nav className="flex sm:hidden flex-row items-center justify-between w-full py-2 pl-4 pr-2">
          <Link
            href="/"
            aria-label="Inicio"
            className="relative flex flex-row items-center space-x-8 h-12 w-12 sm:w-16 sm:h-16"
          >
            <Image
              src="/images/logo-white.png"
              alt="Logotipo de Jurídicos y Asociados"
              layout="fill"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleMobileMenu}
          >
            <Image
              src="/icons/menu.svg"
              alt="Icono Menú"
              width={32}
              height={32}
            />
          </IconButton>
        </nav>

        {/* Menú principal en escritorio */}
        <div className="hidden sm:flex flex-row items-center flex-1 space-x-8 py-4 justify-end">
          <Link href="/">
            <MenuItem>Inicio</MenuItem>
          </Link>
          <button
            aria-controls="asesoria-menu"
            aria-haspopup="true"
            className="w-full whitespace-nowrap overflow-hidden text-ellipsis"
            onClick={handleClick}
          >
            Especialidades
          </button>
          <Menu
            id="asesoria-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            slotProps={{
              paper: {
                style: {
                  width: "180px",
                },
              },
            }}
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
            <Link href="/servicios/derecho-laboral">
              <MenuItem>Derecho Laboral</MenuItem>
            </Link>
          </Menu>
          <Link href="/blog">
            <MenuItem>Artículos</MenuItem>
          </Link>
          <Link href="/contacto">
            <MenuItem>Contacto</MenuItem>
          </Link>
          <div className="flex flex-row justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white rounded py-3 px-8"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </Toolbar>

      {/* Drawer del menú móvil */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        transitionDuration={300} // Ajusta la duración de la animación
      >
        <div className="w-screen bg-primary h-screen" role="presentation">
          <div className="flex flex-row justify-between p-4">
            <Link
              href="/"
              aria-label="Inicio"
              className="flex flex-row items-center space-x-8"
            >
              <Image
                src="/images/logo-white.png"
                alt="Logotipo de Jurídicos y Asociados"
                width={64}
                height={64}
              />
            </Link>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close drawer"
              onClick={toggleMobileMenu}
            >
              <Image
                src="/icons/close.svg"
                alt="Icono Menú"
                width={32}
                height={32}
              />
            </IconButton>
          </div>

          {/* Enlaces del Drawer */}
          <MenuItem disableGutters onClick={toggleMobileMenu}>
            <Link href="/" className="font-bold text-white pl-4">
              Inicio
            </Link>
          </MenuItem>
          <button
            aria-controls="especialidades-menu"
            aria-haspopup="true"
            className="w-full text-left text-white"
            onClick={() => setOpenCollapse(!openCollapse)}
          >
            <MenuItem disableGutters>
              <div className="font-bold text-white pl-4">Especialidades</div>
            </MenuItem>
          </button>
          <Collapse in={openCollapse} className="text-white pl-6">
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
            <MenuItem>
              <Link href="/servicios/derecho-laboral">Derecho Laboral</Link>
            </MenuItem>
          </Collapse>
          <MenuItem disableGutters onClick={toggleMobileMenu}>
            <Link href="/blog" className="font-bold text-white pl-4">
              Artículos
            </Link>
          </MenuItem>
          <MenuItem disableGutters onClick={toggleMobileMenu}>
            <Link href="/contacto" className="font-bold text-white pl-4">
              Contacto
            </Link>
          </MenuItem>
          <div className="w-full mt-4 pt-8 border-t border-t-secondary flex flex-row justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white rounded py-3 px-8"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
