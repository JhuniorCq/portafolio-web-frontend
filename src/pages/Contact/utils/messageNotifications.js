import Swal from "sweetalert2";

class MessageNotifications {
  static successfulSending() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
    });
  }

  static loadingSending() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "info",
      title: "Enviando el mensaje ...",
    });
  }

  static sendError({ message }) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "error",
      title: message ?? "Error al enviar el mensaje",
    });
  }

  static incorrectValidations() {
    Swal.fire({
      title: "Ups...",
      text: "Por favor, llena los campos correctamente",
      icon: "error",
      confirmButtonColor: "#000000",
    });
  }
}

export default MessageNotifications;
