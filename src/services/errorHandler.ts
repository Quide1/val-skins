export interface ErrorHandlerResponse {
  response: unknown | null
  result: {
    success: boolean
    message: string
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (error: any): ErrorHandlerResponse => {
  if (error?.response) {
    return {
      response: error.response.data.response,
      result: { success: false, message: error.response.data.result.message }
    }
  }

  if (error?.request) {
    console.log('No se pudo recibir una respuesta del servidor.')
    return {
      response: null,
      result: {
        success: false,
        message: 'No se pudo recibir una respuesta del servidor.'
      }
    }
  }

  console.log('Error en la configuración de la solicitud:', error.message)
  return { response: null, result: { success: false, message: error.message } }
}
