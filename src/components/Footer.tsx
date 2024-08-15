import GitHubIcon from '@/icons/GitHubIcon'

function Footer() {
    return (
        <footer className=' w-full h-[4vh] flex flex-row items-center justify-center gap-2 p-2 bg-slate-900 text-white border-red-600 sm:text-sm'>
            <p>Hecho por Eze ❤️</p>
            <a aria-label='Conoce mas sobre mis proyectos en github' target={'_blank'} href="https://github.com/Quide1" >
                <GitHubIcon />
            </a>
        </footer>
    )
}

export default Footer
