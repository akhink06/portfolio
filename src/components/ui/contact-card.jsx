import React from 'react';
import { cn } from '@/lib/utils';
import {
	Plus,
} from 'lucide-react';

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}) {
	return (
		<div
			className={cn(
				'bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<Plus className="absolute -top-3 -left-3 h-6 w-6 text-white/20" />
			<Plus className="absolute -top-3 -right-3 h-6 w-6 text-white/20" />
			<Plus className="absolute -bottom-3 -left-3 h-6 w-6 text-white/20" />
			<Plus className="absolute -right-3 -bottom-3 h-6 w-6 text-white/20" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-8">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
						{title}
					</h1>
					<p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
						{description}
					</p>
					<div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-muted/10 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l border-white/10',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}) {
	return (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div className="bg-muted/20 rounded-lg p-3">
				<Icon className="h-5 w-5 text-white/70" />
			</div>
			<div>
				<p className="font-medium text-white/90 text-sm">{label}</p>
				<p className="text-muted-foreground text-xs">{value}</p>
			</div>
		</div>
	);
}
