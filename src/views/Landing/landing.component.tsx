import Navbar from '@/components/reusable/navbar';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

function LandingComponent() {
	return (
		<>
			<Navbar />
			<div className="px-3 xl:px-20 lg:px-10 border border-red-900">
				<div className="lg:grid lg:grid-cols-2">
					<div className="flex justify-center items-center">
						<div>
							<h1 className="text-2xl lg:text-4xl text-center lg:text-left leading-10 font-bold my-5">
								Welcome to the student portal
							</h1>
							<span className="block leading-8">
								Get to do more ranging from checking and
								printing of result, registration of courses,
								transaction statement etc. Want to know how?{' '}
								<br />
								Get started here to do more...
							</span>
							<Link href="/auth/acct-create">
								<Button
									size={'lg'}
									className="my-5 font-semibold"
								>
									Create an account
								</Button>
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/images/Saly-16.svg"
							width={451}
							height={334}
							alt="image"
						/>
					</div>
				</div>
				<div className="flex flex-col-reverse lg:flex-row ">
					<div className="flex items-center justify-center lg:w-1/2">
						<Image
							src="/images/Saly-14.svg"
							width={250}
							height={134}
							alt="image"
						/>
					</div>
					<div className="flex items-center">
						<div>
							<h1 className="text-2xl lg:text-4xl text-center lg:text-left leading-10 font-bold my-5">
								Register your courses on the go
							</h1>
							<span
								className="block leading-8 w-full"
								spellCheck="true"
							>
								Tired of queing to register for your course at
								Exams and Record Office? <br />
								Registration of Courses is now easy and can be
								done on the go Want to know how? <br />
								Get started here to do more...
							</span>
							<Link href="/auth/acct-create">
								<Button
									size={'lg'}
									className="my-5 font-semibold"
								>
									Get Started Now
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="lg:grid lg:grid-cols-2">
					<div className="flex justify-center items-center">
						<div>
							<h1 className="text-2xl lg:text-4xl text-center lg:text-left leading-10 font-bold my-5">
								Result Checker
							</h1>
							<span className="block leading-8">
								Check your result, anywhere anytime, with ease.
								Want to know how?{' '}
							</span>
							<Button size={'lg'} className="my-5 font-semibold">
								Get More Info
							</Button>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/images/Dataextraction.svg"
							width={451}
							height={334}
							alt="image"
						/>
					</div>
				</div>
			</div>
			{/* <div
				className={`md:bg-[url('/images/online-communication.jpg')] md:bg-cover md:bg-no-repeat md:bg-inherit md:w-full md:h-screen`}
			>
				<div className="md:hidden">
					<Image
						src="/images/online-communication.jpg"
						width={351}
						height={234}
						sizes="1x,2x,3x"
						alt="image"
						className="w-full h-[234px]"
					/>
				</div>
				<div className="py-5 h-44 hidden md:block">
					<div
						className={`${style.box1} lg:mx-auto hidden md:block`}
					></div>
				</div>
				<div>
					<div className={'my-5 lg:mb-10'}>
						<div>
							<h1
								className={`${style.h1} w-full font-semibold md:font-bold lg:text-5xl md:text-4xl text-3xl leading-6 lg:leading-none text-center md:tracking-[0.5em]`}
							>
								STUDENT PORTAL
							</h1>
						</div>
					</div>
				</div>
				<div
					className={
						'md:grid grid-cols-2 items-end lg:h-[350px] hidden md:px-20 lg:px-0 '
					}
				>
					<div className="flex justify-center p-5">
						<ul className={'flex flex-col gap-y-3 p-5  '}>
							<Link className={''} href="auth/login">
								<Button size={'lg'}>LOGIN</Button>
							</Link>

							<Link className={''} href="auth/result-checker">
								<Button size={'lg'}>RESULT CHECKER</Button>
							</Link>
							<Link className={''} href="auth/acct-create">
								<Button size={'lg'}>ACCOUNT CREATION</Button>
							</Link>
							<Link className={''} href="auth/login?cat=fresh">
								<Button size={'lg'}>
									COURSE REGISTRATION FOR FRESH STUDENT
								</Button>
							</Link>
							<Link className={''} href="auth/login?cat=return">
								<Button size={'lg'}>
									COURSE REGISTRATION FOR RETURNING STUDENT
								</Button>
							</Link>
						</ul>
					</div>
					<div className=" flex-end justify-end w-full h-44 hidden md:flex">
						<div className={`${style.box1} mx-auto`}></div>
					</div>
				</div>

				{/* Mobile Screen */}
			{/* <div className="md:hidden">
					<div className="">
						<ul className={''}>
							<Link href="login">
								<Button
									size={'lg'}
									variant="link"
									className="p-0 block text-wrap text-left text-md font-semibold"
								>
									LOGIN
								</Button>
							</Link>

							<Link href="acct-create">
								<Button
									size={'lg'}
									variant="link"
									className="p-0 text-wrap text-left text-md font-semibold my-3"
								>
									ACCOUNT CREATION
								</Button>
							</Link>
							<Link href="login?cat=fresh">
								<Button
									size={'lg'}
									variant="link"
									className="p-0 text-wrap text-left text-md font-semibold my-3"
								>
									COURSE REGISTRATION FOR FRESH STUDENT
								</Button>
							</Link>
							<Link className={''} href="login?cat=return">
								<Button
									size={'lg'}
									variant="link"
									className="p-0 text-wrap text-left text-md font-semibold my-3"
								>
									COURSE REGISTRATION FOR RETURNING STUDENT
								</Button>
							</Link>
							<Link href="result-checker">
								<Button
									size={'lg'}
									variant="link"
									className="p-0 text-wrap text-left text-md font-semibold my-3"
								>
									RESULT CHECKER
								</Button>
							</Link>
						</ul>
					</div>
				</div> */}
			{/* </div> */}
		</>
	);
}

export default LandingComponent;
